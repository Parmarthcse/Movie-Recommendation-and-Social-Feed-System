import AnchorButton from 'components/AnchorButton';
import ImdbIcon from 'public/assets/svgs/icons/imdb.svg';

const Imdb = ({ id }) => (
  <>
    {id ? (
      <AnchorButton
        anchorProps={{
          href: "https://forms.fillout.com/t/dgJqcWGQG4us", // Updated URL
          target: '_blank',
          rel: 'noopener noreferrer',
        }}
        buttonProps={{
          title: 'Review',
          endIcon: (
            <ImdbIcon
              fill="currentColor"
              width="0.875em"
              aria-label="IMDb Icon" // Accessibility improvement
            />
          ),
        }} 
      />
    ) : (
      <span></span> // Fallback content if id is not provided
    )}
  </>
);

export default Imdb;
