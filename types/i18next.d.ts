import "i18next";

// The app always renders translated strings (never raw null for a missing
// key), so widen t()'s return type to plain string for ergonomic props.
declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false;
  }
}
