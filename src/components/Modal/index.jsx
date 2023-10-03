import { AiOutlineCloseCircle } from 'react-icons/ai';
import styles from './Modal.module.css'

const Modal = ({ showModal, handleShowModal, children }) => (
  <div className={`${styles.modal} ${showModal ? styles.show : ''}`}>
    <div className={styles.modal.content}>

      <div
        className={styles.exit}
        onClick={handleShowModal}
        onKeyDown={handleShowModal}
        role="button"
        tabIndex={0}
      >
        <AiOutlineCloseCircle className={styles.closeIcon}/>
      </div>
      {children}
    </div>
  </div>
);

export default Modal;
