import { useState } from 'react';
import catSvg from '../assets/cat.svg';
import '../styles/animations.css';
import styles from './DancingCat.module.css';

export default function DancingCat() {
  const [isAnimating, setIsAnimating] = useState(true);
  const [animationType, setAnimationType] = useState('dancing');

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  const changeAnimation = (type) => {
    setAnimationType(type);
  };

  const getAnimationClass = () => {
    if (!isAnimating) return styles.catPaused;
    switch (animationType) {
      case 'dancing':
        return styles['cat-dancing'];
      case 'bouncing':
        return styles['cat-bouncing'];
      case 'spinning':
        return styles['cat-spinning'];
      default:
        return styles['cat-dancing'];
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.bentoGrid}>
        <div className={`${styles.bentoItem} ${styles.bentoItemTitle}`}>
          <h1 className={styles.title}>🐱 춤추는 고양이 🐱</h1>
        </div>
        <div className={`${styles.bentoItem} ${styles.bentoItemCat}`}>
          <img
            src={catSvg}
            alt="Dancing Cat"
            className={`${styles.cat} ${getAnimationClass()}`}
          />
        </div>
        <div className={`${styles.bentoItem} ${styles.bentoItemControls}`}>
          <div className={styles.controls}>
            <button onClick={toggleAnimation} className={styles.button}>
              {isAnimating ? '⏸ 정지' : '▶ 시작'}
            </button>
            <div className={styles.animationButtons}>
              <button
                onClick={() => changeAnimation('dancing')}
                className={`${styles.animationBtn} ${
                  animationType === 'dancing' ? styles.active : ''
                }`}
              >
                춤추기
              </button>
              <button
                onClick={() => changeAnimation('bouncing')}
                className={`${styles.animationBtn} ${
                  animationType === 'bouncing' ? styles.active : ''
                }`}
              >
                점프
              </button>
              <button
                onClick={() => changeAnimation('spinning')}
                className={`${styles.animationBtn} ${
                  animationType === 'spinning' ? styles.active : ''
                }`}
              >
                회전
              </button>
            </div>
          </div>
        </div>
        <div className={`${styles.bentoItem} ${styles.bentoItemInfo}`}>
          <div className={styles.info}>
            <p>버튼을 클릭하여 애니메이션을 제어하세요!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
