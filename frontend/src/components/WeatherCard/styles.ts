import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  content: {
    flex: '1 1 auto',
  },
  media: {
    textAlign: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '0.4rem',
    [theme.breakpoints.up('sm')]: {
      padding: '1rem',
    },
  },
}));
export default useStyle;