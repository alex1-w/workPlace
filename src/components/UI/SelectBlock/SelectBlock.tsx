import styles from './SelectBlock.module.scss';
import { FC, useState, MouseEventHandler, useRef } from 'react';
import Option from './Option/Option';
import { motion, AnimatePresence } from 'framer-motion';
import { IOption, ISelectProps } from './Select.interface';
import { arrowDownIcon } from '@/icons/icons';

const SelectBlock: FC<ISelectProps> = ({ options, selected, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const arrowRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (value: IOption['value']) => {
    setIsOpen(false);
    onChange?.(value);
    arrowRef?.current?.classList.remove(styles.active);
  };
  const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
    arrowRef?.current?.classList.toggle(styles.active);
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.selectWrapper}>
      <div
        className={styles.placeholder}
        role='button'
        onClick={handlePlaceHolderClick}
        ref={arrowRef}
      >
       <p> {selected?.label}</p>
        {arrowDownIcon}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className={styles.select}
          >
            {options.map((option) => (
              <Option key={option.value} option={option} onClick={handleOptionClick} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SelectBlock;
