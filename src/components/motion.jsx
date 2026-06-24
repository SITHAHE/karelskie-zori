import { motion } from 'framer-motion'

// Базовая анимация появления при скролле. Уважает prefers-reduced-motion
// автоматически через настройку Framer Motion ниже (MotionConfig в App).

const ease = [0.16, 1, 0.3, 1]

export function Reveal({ children, delay = 0, y = 28, className = '', as = 'div' }) {
  const M = motion[as] || motion.div
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </M>
  )
}

// Контейнер со ступенчатым появлением детей
export function Stagger({ children, className = '', delayChildren = 0, stagger = 0.12 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren } },
      }}
    >
      {children}
    </motion.div>
  )
}

export const itemVariants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

export const StaggerItem = ({ children, className = '' }) => (
  <motion.div className={className} variants={itemVariants}>
    {children}
  </motion.div>
)
