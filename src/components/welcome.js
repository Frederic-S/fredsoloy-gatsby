import React from "react"

import welcomeStyles from "./welcome.module.scss"

const Welcome = () => {
  return (
    <div className={welcomeStyles.container}>
      <div className={welcomeStyles.text}>
        <p>
          Rebuiding my personal site,
          <br />
          with GatsbyJS
        </p>
        <p>Ready soon, in progress...</p>
      </div>
      {/* end of text div */}
    </div>
  )
}

export default Welcome
