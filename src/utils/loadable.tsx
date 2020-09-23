import loadable from "@loadable/component";
import React from "react";

import { LoadableModal } from "react-app-env";
import PageLoading from "ui/PageLoading";

const loadablePage: LoadableModal = (loadFn) =>
  loadable(loadFn, {
    fallback: <PageLoading />
  });

export { loadablePage };
