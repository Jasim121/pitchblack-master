export const getSectionHeaderStyles = (theme) => {
  return {
    default_headerSection_container: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      "& > *": {
        marginBottom: 10,
      },
    },
    default_headerSection_pageTitle: {
      fontWeight: "bold",
      marginRight: 50,
    },
    default_headerSection_actionsContainer: {
      display: "flex",
      flexWrap: "wrap",
      marginLeft: "auto",
      "& > *": {
        marginLeft: 10,
      },
    },
    default_headerSection_label: {
      marginRight: 5,
      color: `#8F92A1`,
    },
  };
};

export const getTypographyStyles = (theme) => {
  return {
    default_typography_heading: {
      fontSize: 26,
    },
    default_typography_subHeading: {
      fontSize: 22,
    },
    default_typography_medium: {
      fontSize: 24,
    },
    default_typography_paragraph: {
      fontSize: 16,
    },
    default_typography_label: {
      fontSize: 12,
    },
    default_typography_bold: {
      fontWeight: "bold",
    },
    default_typography_medium: {
      fontWeight: "500",
    },
    default_typography_colorDark: {
      color: "#000",
    },
    default_typography_colorLight: {
      color: "#808191",
    },
    default_typography_colorSuccess: {
      color: "#4FBF67",
    },
    default_typography_colorPrimary: {
      color: "#685BE7",
    },
    default_typography_capitalize: {
      textTransform: "capitalize",
    },
  };
};

export const getPageStyles = (theme) => {
  return {
    default_page_root: {
      display: "flex",
      flexDirection: "column",
      borderRadius: 25,
      background: "#fff",
      width: "100%",
      padding: 20,
      height: "100%",
      flexGrow: 1,
      flexBasis: "max-content",
      overflow: "hidden",
      [theme.breakpoints.down("sm")]: {
        overflowY: "scroll",
        height: "auto",
        minHeight: "100%",
        padding: 15,
        borderRadius: 15,
      },
    },
    default_page_scrollContainer: {
      height: "100%",
      overflow: "hidden",
      [theme.breakpoints.only("xs")]: {
        overflow: "visible",
      },
    },
    default_page_Bg1: {
      background: "#685BE7",
    },
    default_page_Bg2: {
      background: "#E5E5E5",
    },
    default_page_BgWhite: {
      background: "#fff",
    },
    default_page_BgDark: {
      background: "#000",
    },
    default_page_BgTransparent: {
      background: "transparent",
    },
    default_page_removePadding: {
      padding: "0px !important",
    },
    default_page_removeCurves: {
      borderRadius: "0px !important",
    },
    default_page_shadow1: {
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    },
  };
};

export const getModalStyles = (theme) => {
  return {
    default_modal_scrollContainer: {
      height: 300,
      maxHeight: 300,
      overflowY: "auto",
    },
    default_modal_body: {
      padding: "20px 0px",
    },

    default_modal_infoContainer: {
      maxWidth: "fit-content",
      background: "#eee",
      padding: 10,
      borderRadius: 10,
      display: "flex",
      fontSize: 6,
    },
    default_modal_buttonContainers: {},
    default_modal_footer: {
      marginTop: 20,
    },
    default_modal_buttonSecondary: {
      backgroundColor: "rgba(143, 146, 161, 0.1) !important",
      color: "#171717 !important",
      "&:hover": {
        color: "#171717 !important",
        backgroundColor: "rgba(143, 146, 161, 0.1) !important",
      },
    },
  };
};
