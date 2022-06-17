import { XIcon } from '@heroicons/react/solid';
import { useState } from 'react';

import styles from '../styles/modal.module.css';
const UpdateEditPostModal = (props) => {
  const { name, image, text, postImage, date, _id } = props.post;
  console.log(_id);
  const [allPost, setAllPost] = useState([]);
  const handleDeletePost = (id) => {
    alert('Deleted');
  };
  if (!props.show) {
    return null;
  }

  return (
    <div onClick={props.onClose} className={styles.modal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.modal_content}
      >
        <div className="p-5 flex flex-col">
          <button className="hover:bg-gray-200">Post</button>
          <button className="hover:bg-gray-200">Save Video</button>
        </div>
        <hr />
        <div className="p-5  ">
          <button
            onClick={() => handleDeletePost()}
            className="hover:bg-gray-200"
          >
            Move to Recycle bin
          </button>
        </div>

        <XIcon
          onClick={props.onClose}
          className={`h-10 text-2xl icon cursor-pointer w-10 ${styles.close}`}
        />
      </div>
    </div>
  );
};

export default UpdateEditPostModal;
