import Rules from "../../assets/icons/image-rules-bonus.svg";
import Close from "../../assets/icons/icon-close.svg";
import { useState } from "react";

export default function Footer() {
  const [showRules, setShowRules] = useState(false);

  const toggleRules = () => {
    setShowRules(currentValue => {
      return !currentValue
    })
  }
  return (
    <footer className="footer md:self-end">
      {showRules &&
        <section className="rules-modal-contanier md:fixed inset-0 md:bg-gradient-radial md:from-bg-from md:to-bg-to/75 md:bg-opacity-40 md:grid md:place-items-center">
          <section className="animate-fadeIn rules-modal-content fixed inset-0 z-10 bg-white px-7 flex flex-col items-center justify-around md:static md:py-8 md:items-start md:flex-row md:flex-wrap md:justify-between">
            <h2 className="title uppercase text-text-dark font-bold text-600 md:order-1">Rules</h2>
            <section className="image-rules md:order-3 md:w-full">
              <img src={Rules} alt="Rule Book" title="Rule Book" className="md:ms-auto md:me-auto" />
            </section>
            <button onClick={toggleRules} className="md:order-2">
              <i className="sr-only ">Close</i>
              <img src={Close} alt="Close Button" title="Click to Close Rule Book" />
            </button>
          </section>
        </section>
      }
      <button className="rules uppercase tracking-[3px] text-white text-100 font-semibold py-2 px-7 border-2 border-solid border-header-outline border-opacity-95 rounded-md outline-none hover:shadow-paper focus-within:shadow-paper transition-shadow" title="Click to view rules" onClick={toggleRules} tabIndex={6}>rules</button>
    </footer>
  )
}
