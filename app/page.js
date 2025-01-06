import Results from '@components/Results';

// This is the default async page function in the new Next.js App Directory.
const Page = async ({ searchParams }) => {
  const params = await searchParams;
  const param = params.genre || 'popular'; // Getting the genre from query params or defaulting to 'popular'
  const BASE_URL = 'https://api.themoviedb.org/3';
console.log(param)
  // Fetch data from TMDB API   
  const response = await fetch(
    `${BASE_URL}/movie/${param}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`,{
      next:{revalidate:60}
    }
  );

  const data = await response.json();
console.log(data)
  // Return JSX
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
      <Results movies={data.results} />
    </div>
  );
};

export default Page;
