import React from "react";
import LogoBurger from '../../../assets/images/LogoBurger.png'
import {Link} from 'react-router-dom'

const MemberScreen = () => {
  return (
    <>
      <section>
          <img src={LogoBurger} alt="" />
      </section>
      <section>
        <Link to={'/cashier'}>CASHIER</Link>
        <Link to={'/chef'}>KITCHEN </Link>
        <Link to={'/waiter'}>WAITER</Link>
      </section>
    </>
  );
};

export default MemberScreen;
