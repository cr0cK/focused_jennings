import * as React from 'react'

interface ILinkProps {
  to: string
  label: string
}

const Link: React.FunctionComponent<ILinkProps> = props => {
  /**
   * Push into the history and trigger the onpopstate event, catched by MyRouter.
   */
  const handleAOnClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault()

    window.history.pushState(props, '', props.to)

    const popStateEvent = new PopStateEvent('popstate', { state: props })
    window.dispatchEvent(popStateEvent)
  }

  return (
    <a href={props.to} onClick={handleAOnClick}>
      {props.label}
    </a>
  )
}

export default Link
