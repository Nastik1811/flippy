import {ReactNode} from 'react'
import {
    Window,
    Popup,
    Content,
    Container,
    PopupHeader,
    PopupActions,
} from './styled'

interface IHasChildren {
    children: ReactNode
}

// const Popup = ({onDismiss, children}: IHasChildren) => {
//     return (
//         <Window onClick={onDismiss}>
//             <Popup onClick={e: => e.stopPropagation()}>{children}</Popup>
//         </Window>
//     )
// }

// export const PopupContent = ({children}: IHasChildren) => {
//     return (
//         <Content>
//             <Container>{children}</Container>
//         </Content>
//     )
// }

// export const PopupHeader = ({title}) => {
//     return (
//         <PopupHeader>
//             <h3 className={styles['title']}>{title}</h3>
//             <hr className={styles['hr']}></hr>
//         </header>
//     )
// }

// export const ModalMessage = ({children}: IHasChildren) => {
//     return <p className={styles['message']}>{children}</p>
// }

// export const ModalCheckbox = ({label, onChange, checked}) => {
//     return (
//         <section className={styles['checkbox']}>
//             <input
//                 id='ch'
//                 type='checkbox'
//                 checked={checked}
//                 onChange={onChange}
//             />
//             <label htmlFor='ch'> {label}</label>
//         </section>
//     )
// }

// export const ModalInput = ({value, onChange, placeholder}) => {
//     return (
//         <div className={styles['input']}>
//             <InputField
//                 type='text'
//                 placeholder={placeholder}
//                 value={value}
//                 onChange={onChange}
//             />
//         </div>
//     )
// }

// export default Modal
