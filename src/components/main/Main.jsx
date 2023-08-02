import Spock from '../../assets/icons/icon-spock.svg';
import Lizard from '../../assets/icons/icon-lizard.svg';
import Rock from '../../assets/icons/icon-rock.svg';
import Paper from '../../assets/icons/icon-paper.svg';
import Scissors from '../../assets/icons/icon-scissors.svg';
import { useContext, useEffect, useReducer, useState } from 'react';
import { Roshambo } from '../roshambo/Roshambo';
import DataContext from '../../context/DataContext';

export default function Main() {

  const drawReducer = (state, action) => {
    switch (action.type) {
      case 'TODRAW':
        return { state: true }
      case 'TOHOME':
        return { state: false }
      default:
        return state;
    }
  }

  const [draw, drawDispatch] = useReducer(drawReducer, { state: false });
  const [pickings, setPickings] = useState({});
  const [result, setResult] = useState({});
  const { dispatchScore } = useContext(DataContext);

  const goToDraw = (componentName) => {
    drawDispatch({ type: 'TODRAW' });
    setPickings({
      client: componentName,
      house: getRandomRPSLS()
    });
  }

  const goToHome = () => {
    setPickings({});
    setResult({});
    drawDispatch({ type: 'TOHOME' });
  }

  const getRandomRPSLS = () => {
    const options = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
    const randomIndex = Math.trunc(Math.random() * options.length)
    return options[randomIndex]
  }

  useEffect(() => {
    if (Object.keys(pickings).length > 0)
      calculateResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pickings])

  const calculateResult = () => {
    const { client, house } = pickings;
    const rules = {
      'Scissors': ['Paper', 'Lizard'],
      'Paper': ['Rock', 'Spock'],
      'Rock': ['Scissors', 'Lizard'],
      'Lizard': ['Paper', 'Spock'],
      'Spock': ['Scissors', 'Rock'],
    }
    if (rules[client].includes(house)) {
      setTimeout(() => {
        dispatchScore({ type: 'INCREMENT' });
      }, 750);
      setTimeout(() => {
        setResult({
          text: 'You Won',
          client: true,
          house: false
        });
      }, 500);

    } else if (client === house) {
      setTimeout(() => {
        setResult({
          text: 'You Drew',
          client: null,
          house: null
        });
      }, 500);
    } else {
      setTimeout(() => {
        dispatchScore({ type: 'DECREMENT' });
      }, 750);
      setTimeout(() => {
        setResult({
          text: 'You Lose',
          client: false,
          house: true
        });
      }, 500);
    }
  }


  const roshamboComponents = [
    {
      Roshamboname: 'Scissors',
      brColor: 'border-scissors-gradient-from',
      top: '-top-6',
      left: 'left-[74px]',
      hover: 'hover:shadow-scissors',
      focusWithin: 'focus-within:shadow-scissors',
      befBrColor: 'before:border-scissors-gradient-to',
      l375: 'min-[375px]:left-28',
      topmd: 'md:-top-12',
      lxl: 'xl:left-[6.25rem]',
      image: Scissors,
      image375: 'min-[375px]:w-8',
      imagemd: 'md:w-10',
      animation: 'animate-fadeInHalf'
    },
    {
      Roshamboname: 'Spock',
      brColor: 'border-spock-gradient-from',
      top: 'top-16',
      left: '-left-[19px]',
      hover: 'hover:shadow-spock',
      focusWithin: 'focus-within:shadow-spock',
      befBrColor: 'before:border-spock-gradient-to',
      l375: 'min-[375px]:left-0',
      topmd: 'md:top-16',
      leftmd: 'md:-left-12',
      image: Spock,
      image375: 'min-[375px]:w-[28px]',
      imagemd: 'md:w-8',
      animation: 'animate-fadeInHalf'
    },
    {
      Roshamboname: 'Lizard',
      brColor: 'border-lizard-gradient-from',
      top: 'top-44',
      left: 'left-0',
      hover: 'hover:shadow-lizard',
      focusWithin: 'focus-within:shadow-lizard',
      befBrColor: 'before:border-lizard-gradient-to',
      t375: 'min-[375px]:top-48',
      l375: 'min-[375px]:left-10',
      topmd: 'md:top-60',
      leftmd: 'md:left-0',
      image: Lizard,
      image375: 'min-[375px]:w-10',
      imagemd: 'md:w-12',
      animation: 'animate-fadeInHalf'
    },
    {
      Roshamboname: 'Rock',
      brColor: 'border-rock-gradient-from',
      top: 'top-44',
      left: 'left-36',
      hover: 'hover:shadow-rock',
      focusWithin: 'focus-within:shadow-rock',
      befBrColor: 'before:border-rock-gradient-to',
      t375: 'min-[375px]:top-48',
      l375: 'min-[375px]:left-48',
      topmd: 'md:top-60',
      leftmd: 'md:left-52',
      image: Rock,
      image375: 'min-[375px]:w-8',
      imagemd: 'md:w-10',
      animation: 'animate-fadeInHalf'
    },
    {
      Roshamboname: 'Paper',
      brColor: 'border-paper-gradient-from',
      top: 'top-16',
      left: 'left-[164px]',
      hover: 'hover:shadow-paper',
      focusWithin: 'focus-within:shadow-paper',
      befBrColor: 'before:border-paper-gradient-to',
      l375: 'min-[375px]:left-56',
      topmd: 'md:top-16',
      leftmd: 'md:left-64',
      image: Paper,
      image375: 'min-[375px]:w-8',
      imagemd: 'md:w-10',
      animation: 'animate-fadeInHalf'
    }
  ]

  return (
    <main id="main" className={`content flex-grow w-full flex justify-center items-center md:items-end md:mb-4 lg:items-center lg:mb-0 ${Object.keys(pickings).length !== 0 ? 'lg-mt-0' : 'lg:mt-20'} min-[2560px]:flex-grow-0 min-[2560px]:mt-40 `}>
      {
        !draw.state ?
          <section className="home relative bg-[url('/src/assets/icons/bg-pentagon.svg')] bg-no-repeat bg-center bg-contain w-full max-w-[225px] h-60  ms-auto me-auto z-0 min-[375px]:max-w-[330px] md:bg-auto md:h-[313px]">{/* set z-index to a positive number to render pseudo elements inside home*/}
            {roshamboComponents.map(componentProps => {
              return <Roshambo
                key={componentProps.Roshamboname}
                goToDraw={goToDraw}
                {...componentProps}
              />
            })}
          </section>
          :
          <section className='draw flex flex-row flex-wrap justify-between lg:flex-nowrap lg:gap-20 lg:items-center'>
            <section className='client flex flex-col text-center gap-8 lg:flex-col-reverse lg:order-1 lg:gap-12'>
              <section className="pickings grid place-items-center relative z-0">{/* set z-index to a positive number to render pseudo elements inside home*/}
                {pickings &&
                  <Roshambo
                    Roshamboname={pickings.client}
                    brColor={`border-${pickings.client.toLowerCase()}-gradient-from`}
                    hover={`hover:shadow-${pickings.client.toLowerCase()}`}
                    focusWithin={`focus-within:shadow-${pickings.client.toLowerCase()}`}
                    befBrColor={`before:border-${pickings.client.toLowerCase()}-gradient-to`}
                    image={roshamboComponents.find((c) => c.Roshamboname === pickings.client).image}
                    image375={roshamboComponents.find((c) => c.Roshamboname === pickings.client).image375}
                    imagemd={roshamboComponents.find((c) => c.Roshamboname === pickings.client).imagemd}
                    animation='animate-fadeInHalf'
                    modify={true}
                    status={result.client ? 'shadow-won' : ''}
                  />
                }
              </section>
              <p className='uppercase text-white text-[0.7rem] font-bold tracking-[3px] min-[375px]:text-100 lg:text-400 xl:text-[1.25rem] xl:font-semi-bold animate-fadeInHalf'>You Picked</p>
            </section>
            <section className="house flex flex-col text-center gap-8 lg:flex-col-reverse lg:order-3 lg:gap-12">
              <section className="pickings grid place-items-center relative z-0">
                {pickings &&
                  <Roshambo
                    Roshamboname={pickings.house}
                    brColor={`border-${pickings.house.toLowerCase()}-gradient-from`}
                    hover={`hover:shadow-${pickings.house.toLowerCase()}`}
                    focusWithin={`focus-within:shadow-${pickings.house.toLowerCase()}`}
                    befBrColor={`before:border-${pickings.house.toLowerCase()}-gradient-to`}
                    image={roshamboComponents.find((c) => c.Roshamboname === pickings.house).image}
                    image375={roshamboComponents.find((c) => c.Roshamboname === pickings.house).image375}
                    imagemd={roshamboComponents.find((c) => c.Roshamboname === pickings.house).imagemd}
                    animation='animate-fadeInHalf'
                    modify={true}
                    status={result.house ? 'shadow-won' : ''}
                  />
                }
              </section>
              <p className='uppercase text-white text-[0.7rem] font-bold tracking-[3px] min-[375px]:text-100 lg:text-400 xl:text-[1.25rem] xl:font-semi-bold animate-fadeInHalf'>The House Picked</p>
            </section>
            {result.text && <section className="results flex flex-col items-center gap-4 w-full mt-12 md:mt-0 lg:w-auto lg:order-2 animate-fadeIn">
              <p className='uppercase text-white text-700 font-bold tracking-[5px]'>{`${result.text}`}</p>
              <button className='uppercase text-text-dark text-300 bg-white py-4 px-12 rounded-md font-bold tracking-[3px] border-2 border-solid border-transparent outline-none hover:bg-transparent hover:border-white hover:text-white focus-within:border-white focus-within:text-white focus-within:bg-transparent focus-within:shadow-paper transition-all' tabIndex={1} onClick={goToHome}>Play Again</button>
            </section>}
          </section>
      }
    </main>
  )
}
