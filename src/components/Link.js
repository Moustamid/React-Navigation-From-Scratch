import React from "react";

const Link = ({ href, className, children }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
    event.preventDefault();
  };

  return (
    <div>
      <a className={className} href={href} onClick={onClick}>
        {children}
      </a>
    </div>
  );
};

export default Link;
