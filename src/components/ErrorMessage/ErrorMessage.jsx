import { BiSolidErrorAlt } from 'react-icons/bi';
import css from './ErrorMessage.module.css';

export default function ErrorMessage() {
  return (
    <div className={css.errorContainer}>
      <BiSolidErrorAlt className={css.errorIcon} />
      <p className={css.errorText}>
        Something went wrong, please reload you page!
      </p>
    </div>
  );
}
