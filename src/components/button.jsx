import {
  Button as MuiButton,
  CircularProgress,
  makeStyles,
} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles({
  button: {
    background: "#FFA741",
    color: "#fff",
    width: "200px",
    borderRadius: 0,
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#FFA741",
    },
  },
});

export const Button = ({
  children,
  loading,
  className,
  endIcon,
  ...otherProps
}) => {
  const classes = useStyles();

  let markup = null;
  let icon = null;

  if (endIcon) {
    icon = loading ? (
      <CircularProgress
        size={20}
        style={{
          color: "#fff",
        }}
      />
    ) : (
      endIcon
    );
    markup = children;
  } else {
    markup = loading ? (
      <CircularProgress
        size={20}
        style={{
          color: "#fff",
        }}
      />
    ) : (
      children
    );
  }

  return (
    <MuiButton
      disableRipple
      className={clsx([classes.button, className])}
      endIcon={icon}
      {...otherProps}
    >
      {markup}
    </MuiButton>
  );
};
