import React, { useEffect } from "react";

import Spinner from "ui/Spinner";

import css from "./PageLoading.module.scss";

const PageLoading = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    document.body.style.height = "100vh";

    return () => {
      document.body.style.overflow = "initial";

      document.body.style.height = "initial";
    };
  }, []);

  return (
    <div className={css.PageLoading}>
      <Spinner size={2} />
    </div>
  );
};

export { PageLoading };

export default React.memo(PageLoading);
