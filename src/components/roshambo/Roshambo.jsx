import PropTypes from 'prop-types';

export const Roshambo = ({
    Roshamboname,
    brColor,
    top,
    left,
    hover,
    focusWithin,
    befBrColor,
    t375,
    l375,
    topmd,
    leftmd,
    lxl,
    goToDraw,
    image,
    image375,
    imagemd,
    modify,
    animation,
    status
}) => {
    /* Returns classes with only truth values, discard all the falsy values */
    const classNames = (...classes) => {
        return classes.filter(Boolean).join(' ');
    }

    const defaultClass = classNames(
        'flex', 'items-center', 'justify-center', 'rounded-full', 'border-solid', 'border-[12px]', brColor, 'bg-header-outline',
        'bg-opacity-20', 'outline-none', 'hover:cursor-pointer', hover, focusWithin, 'transition-shadow', 'before:absolute', 'before:border-solid', 'before:border-[12px]', befBrColor, 'before:bg-white', 'before:rounded-full', 'before:-top-[0.5rem]', 'before:-z-[1]', t375, l375, topmd, leftmd, animation
    );

    const roshamboOverride = 'relative top-0 left-0 w-28 h-28 before:w-28 before:h-28 min-[375px]:w-32 min-[375px]:h-32 min-[375px]:before:w-32 min-[375px]:before:h-32 md:w-44 md:h-44 md:border-[20px] md:before:w-44 md:before:h-44 md:before:border-[12px] md:before:-top-[0.8rem] lg:w-60 lg:h-60 lg:before:w-60 lg:before:h-60';

    const imageOverride = 'w-10 md:w-12 lg:w-20';

    return (
        <section className={`${Roshamboname} ${defaultClass} ${modify ? roshamboOverride : `absolute w-20 h-20 ${top} ${left} before:w-20 before:h-20 min-[375px]:w-24 min-[375px]:h-24 min-[375px]:before:w-24 min-[375px]:before:h-24 md:w-28 md:h-28 md:before:w-28 md:before:h-28 xl:w-32 xl:h-32 xl:before:w-32 xl:before:h-32 xl:border-[16px] ${lxl ?? ''} xl:before:-top-[0.75rem]`} ${status}`} tabIndex={1} title={Roshamboname} onClick={goToDraw ? () => goToDraw(Roshamboname) : null}>
            <img src={image} alt={Roshamboname} title={Roshamboname} className={`${modify ? imageOverride : `w-6 ${image375} ${imagemd}`}`} />
        </section>
    )
}

/**
 * Need to specify proptypes, CRA automatically handles this 
 * but when using other build tools like Vite, 
 * have to define it explicitly
 */
Roshambo.propTypes = {
    Roshamboname: PropTypes.string.isRequired,
    brColor: PropTypes.string.isRequired,
    top: PropTypes.string,
    left: PropTypes.string,
    hover: PropTypes.string.isRequired,
    focusWithin: PropTypes.string.isRequired,
    befBrColor: PropTypes.string.isRequired,
    t375: PropTypes.string,
    l375: PropTypes.string,
    topmd: PropTypes.string,
    leftmd: PropTypes.string,
    lxl: PropTypes.string,
    goToDraw: PropTypes.func,
    image: PropTypes.string.isRequired,
    image375: PropTypes.string.isRequired,
    imagemd: PropTypes.string.isRequired,
    modify: PropTypes.bool,
    animation: PropTypes.string,
    status: PropTypes.string
}