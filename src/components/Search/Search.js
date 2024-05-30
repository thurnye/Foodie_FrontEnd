import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from './Search.module.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import { getRandomInt } from '../../util/commons';
import CustomizedButton from '../CustomizedButton/CustomizedButton';
import services from '../../util/services';
import { CircularProgress } from '@mui/material';

const Search = () => {
  const [searchedQuery, setSearchedQuery] = useState('');
  // const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [options, setOptions] = useState([])
  const [open, setOpen] = React.useState(false);
  const loading = open && options.length === 0;


  const fetchAutoComplete = async () => {
    try {
      // setLoading(true)
      const res = await services.getAutoComplete({
        section: ['recipe'],
      });
      console.log(res.data);
      setOptions(res.data)
      
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      // await sleep(1e3); // For demo purposes.

      if (active) {
        fetchAutoComplete()
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);


  useEffect(() => {
    fetchAutoComplete()
  },[])

  // useEffect(() => {
  //   if(data.length){
  //     setOptions(data.map((el) => ({title: el.title})))
  //     setLoading(false)
  //   }
  // }, [data])

  const handleSearch = () => {
    console.log(searchedQuery)
  }

  return (
    <div className={styles.Search}>
      <Box
        sx={{
          my: 3,
          display: 'flex',
          mr: 10,
          // width: {xs: '100%', sm:'90%', md: '70%'},
          margin: 'auto',
        }}
      >
        <Autocomplete
          id='free-solo-search'
          freeSolo
          isOptionEqualToValue={(option, value) => option.title === value.title}
          getOptionLabel={(option) => option.title}
          options={options}
          loading={loading}
          onInputChange={(event, newInputValue) => {
            setSearchedQuery(newInputValue);
          }}
          sx={{
            flexGrow: 1,
          }}
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              size="small"
              fullWidth
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderRadius: 0,
                    border: 'none',
                    boxShadow:
                      '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
                  },
                },
                '&.Mui-focused': {
                  borderColor: '#6F7E8C',
                },
              }}
            />
          )}
        />
        <CustomizedButton
          variant='contained'
          label={'Search'}
          backgroundColor={'#000000'}
          id='search-customized-button'
          aria-controls='search-customized-menu'
          disableElevation
          onClick={handleSearch}
          sx={{ fontSize: { xs: 15, md: 18 }, borderRadius: 0, height: 40 }}
        />
      </Box>
    </div>
  );
};

export default Search;

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { id: getRandomInt(), title: 'The Shawshank Redemption', year: 1994 },
  { id: getRandomInt(), title: 'The Godfather', year: 1972 },
  { id: getRandomInt(), title: 'The Godfather: Part II', year: 1974 },
  { id: getRandomInt(), title: 'The Dark Knight', year: 2008 },
  { id: getRandomInt(), title: '12 Angry Men', year: 1957 },
  { id: getRandomInt(), title: "Schindler's List", year: 1993 },
  { id: getRandomInt(), title: 'Pulp Fiction', year: 1994 },
  {
    id: getRandomInt(),
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { id: getRandomInt(), title: 'The Good, the Bad and the Ugly', year: 1966 },
  { id: getRandomInt(), title: 'Fight Club', year: 1999 },
  {
    id: getRandomInt(),
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    id: getRandomInt(),
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { id: getRandomInt(), title: 'Forrest Gump', year: 1994 },
  { id: getRandomInt(), title: 'Inception', year: 2010 },
  {
    id: getRandomInt(),
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { id: getRandomInt(), title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { id: getRandomInt(), title: 'Goodfellas', year: 1990 },
  { id: getRandomInt(), title: 'The Matrix', year: 1999 },
  { id: getRandomInt(), title: 'Seven Samurai', year: 1954 },
  {
    id: getRandomInt(),
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { id: getRandomInt(), title: 'City of God', year: 2002 },
  { id: getRandomInt(), title: 'Se7en', year: 1995 },
  { id: getRandomInt(), title: 'The Silence of the Lambs', year: 1991 },
  { id: getRandomInt(), title: "It's a Wonderful Life", year: 1946 },
  { id: getRandomInt(), title: 'Life Is Beautiful', year: 1997 },
  { id: getRandomInt(), title: 'The Usual Suspects', year: 1995 },
  { id: getRandomInt(), title: 'Léon: The Professional', year: 1994 },
  { id: getRandomInt(), title: 'Spirited Away', year: 2001 },
  { id: getRandomInt(), title: 'Saving Private Ryan', year: 1998 },
  { id: getRandomInt(), title: 'Once Upon a Time in the West', year: 1968 },
  { id: getRandomInt(), title: 'American History X', year: 1998 },
  { id: getRandomInt(), title: 'Interstellar', year: 2014 },
  { id: getRandomInt(), title: 'Casablanca', year: 1942 },
  { id: getRandomInt(), title: 'City Lights', year: 1931 },
  { id: getRandomInt(), title: 'Psycho', year: 1960 },
  { id: getRandomInt(), title: 'The Green Mile', year: 1999 },
  { id: getRandomInt(), title: 'The Intouchables', year: 2011 },
  { id: getRandomInt(), title: 'Modern Times', year: 1936 },
  { id: getRandomInt(), title: 'Raiders of the Lost Ark', year: 1981 },
  { id: getRandomInt(), title: 'Rear Window', year: 1954 },
  { id: getRandomInt(), title: 'The Pianist', year: 2002 },
  { id: getRandomInt(), title: 'The Departed', year: 2006 },
  { id: getRandomInt(), title: 'Terminator 2: Judgment Day', year: 1991 },
  { id: getRandomInt(), title: 'Back to the Future', year: 1985 },
  { id: getRandomInt(), title: 'Whiplash', year: 2014 },
  { id: getRandomInt(), title: 'Gladiator', year: 2000 },
  { id: getRandomInt(), title: 'Memento', year: 2000 },
  { id: getRandomInt(), title: 'The Prestige', year: 2006 },
  { id: getRandomInt(), title: 'The Lion King', year: 1994 },
  { id: getRandomInt(), title: 'Apocalypse Now', year: 1979 },
  { id: getRandomInt(), title: 'Alien', year: 1979 },
  { id: getRandomInt(), title: 'Sunset Boulevard', year: 1950 },
  {
    id: getRandomInt(),
    title:
      'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { id: getRandomInt(), title: 'The Great Dictator', year: 1940 },
  { id: getRandomInt(), title: 'Cinema Paradiso', year: 1988 },
  { id: getRandomInt(), title: 'The Lives of Others', year: 2006 },
  { id: getRandomInt(), title: 'Grave of the Fireflies', year: 1988 },
  { id: getRandomInt(), title: 'Paths of Glory', year: 1957 },
  { id: getRandomInt(), title: 'Django Unchained', year: 2012 },
  { id: getRandomInt(), title: 'The Shining', year: 1980 },
  { id: getRandomInt(), title: 'WALL·E', year: 2008 },
  { id: getRandomInt(), title: 'American Beauty', year: 1999 },
  { id: getRandomInt(), title: 'The Dark Knight Rises', year: 2012 },
  { id: getRandomInt(), title: 'Princess Mononoke', year: 1997 },
  { id: getRandomInt(), title: 'Aliens', year: 1986 },
  { id: getRandomInt(), title: 'Oldboy', year: 2003 },
  { id: getRandomInt(), title: 'Once Upon a Time in America', year: 1984 },
  { id: getRandomInt(), title: 'Witness for the Prosecution', year: 1957 },
  { id: getRandomInt(), title: 'Das Boot', year: 1981 },
  { id: getRandomInt(), title: 'Citizen Kane', year: 1941 },
  { id: getRandomInt(), title: 'North by Northwest', year: 1959 },
  { id: getRandomInt(), title: 'Vertigo', year: 1958 },
  {
    id: getRandomInt(),
    title: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { id: getRandomInt(), title: 'Reservoir Dogs', year: 1992 },
  { id: getRandomInt(), title: 'Braveheart', year: 1995 },
  { id: getRandomInt(), title: 'M', year: 1931 },
  { id: getRandomInt(), title: 'Requiem for a Dream', year: 2000 },
  { id: getRandomInt(), title: 'Amélie', year: 2001 },
  { id: getRandomInt(), title: 'A Clockwork Orange', year: 1971 },
  { id: getRandomInt(), title: 'Like Stars on Earth', year: 2007 },
  { id: getRandomInt(), title: 'Taxi Driver', year: 1976 },
  { id: getRandomInt(), title: 'Lawrence of Arabia', year: 1962 },
  { id: getRandomInt(), title: 'Double Indemnity', year: 1944 },
  {
    id: getRandomInt(),
    title: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { id: getRandomInt(), title: 'Amadeus', year: 1984 },
  { id: getRandomInt(), title: 'To Kill a Mockingbird', year: 1962 },
  { id: getRandomInt(), title: 'Toy Story 3', year: 2010 },
  { id: getRandomInt(), title: 'Logan', year: 2017 },
  { id: getRandomInt(), title: 'Full Metal Jacket', year: 1987 },
  { id: getRandomInt(), title: 'Dangal', year: 2016 },
  { id: getRandomInt(), title: 'The Sting', year: 1973 },
  { id: getRandomInt(), title: '2001: A Space Odyssey', year: 1968 },
  { id: getRandomInt(), title: "Singin' in the Rain", year: 1952 },
  { id: getRandomInt(), title: 'Toy Story', year: 1995 },
  { id: getRandomInt(), title: 'Bicycle Thieves', year: 1948 },
  { id: getRandomInt(), title: 'The Kid', year: 1921 },
  { id: getRandomInt(), title: 'Inglourious Basterds', year: 2009 },
  { id: getRandomInt(), title: 'Snatch', year: 2000 },
  { id: getRandomInt(), title: '3 Idiots', year: 2009 },
  { id: getRandomInt(), title: 'Monty Python and the Holy Grail', year: 1975 },
];
