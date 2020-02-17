#!/usr/bin/env bash

SDK_DIR="../comit-js-sdk"

function sdk_exists() {
  if [ -d $SDK_DIR ]; then
    echo "☺ comit-js-sdk found."
    return 0
  else
    echo "☹ ERROR: comit-js-sdk not found."
    return 1
  fi
}

function docs_exists() {
  if [ -d $SDK_DIR/docs ]; then
    echo "☺ SDK docs found."
    return 0
  else
    echo "☹ ERROR: SDK docs not found."
    return 1
  fi
}

function generate_docs() {
  echo "☺ Generating SDK docs."
  cd $SDK_DIR
  npm run docs:md
  cd ..
}

import_docs() {
  echo "☺ Importing SDK docs."
  rm $SDK_DIR/docs/globals.md
  rm -rfv docs/comit-sdk/ && mkdir docs/comit-sdk/
  cp -R $SDK_DIR/docs/. docs/comit-sdk/
}

# Main script
# if sdk_exists; then
#   generate_docs
# fi

if docs_exists; then
  import_docs
fi
