import React, { Component, FC } from 'react';

import './row.css';

interface Props {
    left: any
    right: any
  }
  
  const Row: FC<Props> = ({ left, right }) => {
    return (
      <div className="row mb2">
            <div className="col-md-6">
                { left }
            </div>
            <div className="col-md-6">
                { right }
            </div>
        </div>
    )
  }

  export default Row;