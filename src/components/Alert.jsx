import { IoClose } from 'react-icons/io5';
import { useSelector, useDispatch } from 'react-redux';
import { hideAlert } from '../../redux/slice/alertSlice';
import { IoWarningOutline } from 'react-icons/io5';
import { FaRegCheckCircle } from 'react-icons/fa';
import { MdErrorOutline } from 'react-icons/md';

const Alert = () => {
  const { message, type, icon } = useSelector((state) => state.alert);
  const disPatch = useDispatch();

  if (!message) return null;
  const alertTypeClass = {
    error: 'alert-error',
    success: 'alert-success',
    info: 'alert-info',
    warning: 'alert-warning',
  };

  // alert icons types
  const iconMap = {
    warning: <IoWarningOutline className='text-xl' />,
    success: <FaRegCheckCircle className='text-xl' />,
    error: <MdErrorOutline className='text-xl' />,
  };

  return (
    <div
      role='alert'
      className={`alert fixed z-100 md:top-17 top-22 right-4 motion-preset-slide-left-sm ${
        alertTypeClass[type] || 'alert-info'
      }`}
    >
      <div>{iconMap[icon]}</div>
      <span>{message}</span>
      <IoClose
        className='text-xl cursor-pointer'
        onClick={() => disPatch(hideAlert())}
      />
    </div>
  );
};

export default Alert;
