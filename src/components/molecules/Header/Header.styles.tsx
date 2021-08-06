import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "rgba(0,20,43,0.0)",
    // marginLeft: -theme.spacing(4),
    // marginRight: -theme.spacing(4),
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default useStyles;
