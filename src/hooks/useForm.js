import React, {useState} from 'react';

export default function useForm(initial = {}) {
  const [input, setInput] = useState(initial);

  function handleChange(e) {
    setInput({...input, [e.target.name]: e.target.value});
  }

  function resetForm() {
    setInput(initial);
  }

  return {
    input,
    handleChange,
    resetForm
  }
}