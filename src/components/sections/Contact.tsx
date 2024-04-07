import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';
import { myImage } from '../../assets';
import axios from 'axios';
import PopUp from '../pop/PopUp';
const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map(input => [input, ''])
);

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;
const Contact = () => {
  const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPopUp, setShowPopUp] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    //const emailRegEx = /^[a-zA-Z0-9.-%+_]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
    if (e === undefined) return;

    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> | undefined) => {
    if (e === undefined) return;
    e.preventDefault();
    setLoading(true);
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setLoading(false);
      setError('All fields are required.');
      return;
    }
    const res = await axios.post(`${BACKEND_URL}/api/user-feedback`, {
      name: form.name,
      email: form.email,
      message: form.message,
    });
    if (res && res.data.success) {
      setShowPopUp(true);
      setForm(INITIAL_STATE);
      setLoading(false);
      setError('');
    } else {
      setLoading(false);
      setError('An error occured, please try again later.');
    }
  };

  return (
    <div className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}>
      {showPopUp && <PopUp message="Message sent succesfully" />}
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="h-[350px] md:h-[550px] hidden xl:block xl:h-auto xl:flex-1 xl:max-w-[45%] rounded-2xl overflow-hidden shadow-primary"
      >
        <img src={myImage} alt="abdrasaq-suleiman" className="h-[100%] object-cover" />
      </motion.div>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />

        <form
          // @ts-expect-error
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {error && <p className="text-red-500">{error}</p>}
          {Object.keys(config.contact.form).map(input => {
            const { span, placeholder } =
              config.contact.form[input as keyof typeof config.contact.form];
            const Component = input === 'message' ? 'textarea' : 'input';

            return (
              <label key={input} className="flex flex-col">
                <span className="mb-4 font-medium text-white">{span}</span>
                <Component
                  type={input === 'email' ? 'email' : 'text'}
                  name={input}
                  value={form[`${input}`]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
                  {...(input === 'message' && { rows: 7 })}
                />
              </label>
            );
          })}
          <button
            type="submit"
            className="bg-[#915EFF] hover:bg-[#5f19f6] shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
