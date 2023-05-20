import cls from 'classnames';
import React, { useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import './index.scss';

export default function MenuList({ children, visible, className, listClassName }) {

    return (<CSSTransition
        in={visible}
        timeout={300}
        classNames="dropdownOptions"
        unmountOnExit
    >
        <div className={cls("dropdownOptionsWrapper", className)}>
            <ul className={cls("dropdownOptions", listClassName)}>
                {
                    children
                }
            </ul>
        </div>
    </CSSTransition>)
}

export function MenuItem({ children, className, onClick }) {
    const onMenuClick = useCallback(() => {
        onClick && onClick()
    }, [onClick])
    return <li className={className} onClick={onMenuClick}>
        {
            children
        }
    </li>
}