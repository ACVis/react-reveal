/*
 * Header Component For react-reveal
 *
 * Copyright © Roman Nosov 2017
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import hamburger from './hamburger';
import Menu from './Menu';
//import Fade from 'react-reveal/Fade';
//import { ie10 } from 'react-reveal/globals';

// /function flex(mainAxis = 'row') {
// /  return {
// /    display: ie10 ? '-ms-flexbox' : 'flex',
// /    flexFlow: `${mainAxis} nowrap`,
// /    MsFlexFlow: `${mainAxis} nowrap`,
// /  }
// /}



function Header({ reveal, icon, belowBreakpoint, mounted }) {
  // function getStyles() {
  //  if (!belowBreakpoint)
  //    return {
  //      container: {
  //        width: '100%',
  //        ...flex('row')
  //      },
  //    };
  //  return {
  //    container: {
  //      marginLeft: 'auto',
  //      minHeight: '2.5rem',
  //      paddingTop: '0.375rem' ,
  //      border: '1px solid transparent',
  //      marginTop: '-2.5rem' ,
  //      //paddingBottom: '0.6rem' ,
  //      width: '100%  ',
  //      marginRight: 0,
  //      ...flex('column')
  //    },
  //  };
  //}

  //const styles = getStyles();
  return (
		<nav className="navbar navbar-expand-md navbar-dark bg-dark">
		  <Link className="navbar-brand align-self-start" to="/">react-reveal</Link>
		  <div className="hamburger">
          {icon({ size: 28, style: { alignSelf: 'flex-end' }})}
          {reveal(
            <div className={'navbar-nav w-100' + (mounted ? '':' d-none d-md-flex')}  style={{ justifyContent: 'space-between', marginTop: (belowBreakpoint ? '0.375rem' : void 0) }}>
              {Menu({ nowrap: true })}
            </div>
          )}
		  </div>
    </nav>
	);
}

//export default hamburger(Header, Fade, { collapseProps: {className: 'w-100'}, right: true, opposite: true } );
export default hamburger(Header, { collapseEl: <div className='w-100' />, duration: 300 });
