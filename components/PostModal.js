import { GlobeIcon, PlusCircleIcon, XIcon } from '@heroicons/react/solid';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useFirebase from '../hooks/UseFirebase';
import styles from '../styles/modal.module.css';
const PostModal = (props) => {
  const [img, setImg] = useState(null);
  const { user } = useFirebase();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    (data.name = user.displayName),
      (data.email = 'ikholil@mail.com'),
      (data.image = user.photoURL),
      (data.postImage = img),
      (data.date = new Date().toLocaleString());
    console.log(data);
    const res = await fetch('/api/post', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (result.insertedId) {
      alert('post added');

      reset();
    }
  };
  if (!props.show) {
    return null;
  }
  const handleImgUpload = async (e) => {
    const imageData = new FormData();
    console.log(e.target.files[0]);
    imageData.set('key', 'b6390689b986a9b2ebf6432540b5a4e8');
    await imageData.append('image', e.target.files[0]);

    axios
      .post('https://api.imgbb.com/1/upload', imageData)
      .then((response) => {
        console.log(response.data.data.display_url);

        setImg(response.data.data.display_url);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleClick = () => {
    document.getElementById('photo').click();
  };
  return (
    <div onClick={props.onClose} className={styles.modal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.modal_content}
      >
        <div className="p-5">
          <h1 className="text-3xl font-semibold">Create Post</h1>
        </div>
        <hr />
        <div className="p-5 flex gap-2 items-center">
          <img
            src={user?.photoURL}
            className="w-10 h-10 rounded-full "
            alt="profilephoto"
          />
          <div className="flex flex-col">
            <h1 className="text-lg">{user.displayName}</h1>
            <div className="flex bg-gray-200 items-center rounded-md w-20 cursor-pointer">
              <GlobeIcon className="icon w-6 h-6 p-0.5" />
              <p className="text-sm w-14 rounded-lg ">Public</p>
            </div>
          </div>
        </div>
        <form className="px-5 w-full" onSubmit={handleSubmit(onSubmit)}>
          <textarea
            className="block text-2xl  mb-2 rounded p-2 border w-full"
            placeholder={`What's on your mind, ${user.displayName}?`}
            {...register('text')}
          />

          <div
            onClick={handleClick}
            className="py-5 bg-gray-300 rounded-lg h-28 flex flex-col items-center justify-center cursor-pointer"
          >
            <PlusCircleIcon className="icon" />
            <h1>Add Photos/Videos</h1>
          </div>
          <input
            id="photo"
            hidden
            onChange={handleImgUpload}
            name="img"
            accept="image/*"
            type="file"
            className="mb-2"
          />
          {/* {errors.exampleRequired && <span>This field is required</span>} */}

          <div className="flex justify-center">
            <input
              className="block w-full px-10 my-4 cursor-pointer py-2 font-bold rounded-md text-white bg-blue-600"
              value="Post"
              type="submit"
            />
          </div>
        </form>

        <XIcon
          onClick={props.onClose}
          className={`h-10 text-2xl icon cursor-pointer w-10 ${styles.close}`}
        />
      </div>
    </div>
  );
};

export default PostModal;
