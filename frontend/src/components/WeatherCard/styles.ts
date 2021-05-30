import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
		justifyContent: 'center',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
		padding: '0.8rem 0.8rem 0.8rem 0',
  },
  cover: {
		width: 60,
		backgroundSize: 'contain'
  },
}));
export default useStyle;