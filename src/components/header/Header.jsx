import Bonus from '../../assets/icons/logo-bonus.svg'
import { useContext } from 'react';
import DataContext from '../../context/DataContext';

export default function Header() {
    const { score } = useContext(DataContext);
    return (
        <header className='header w-full border-[3px] p-3 border-header-outline flex justify-between items-center rounded-md gap-4 max-w-2xl md:px-5 md:py-4'>
            <section className='logo w-14 ml-2 md:w-24'>
                <a href="/" className='focus-within:shadow-paper hover:shadow-lizard outline-none'>
                    <img src={Bonus} alt="Logo" title='Logo' />
                </a>
            </section>
            <section className='score-card bg-white py-3 px-4 text-center rounded-md flex flex-col items-center gap-0 md:px-8'>
                <h3 className='score-card-title text-text-score font-bold text-[0.6rem] tracking-[3px] uppercase md:text-300'>Score</h3>
                <strong className='score text-text-dark font-bold text-700 min-w-[56px] leading-[1] md:text-800 md:min-w-[90px]'>{score.value}</strong>
            </section>
        </header>
    )
}
