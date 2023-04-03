interface ExerciseOptions {
    method: string;
    url: string;
    headers: {
      'X-RapidAPI-Key': string;
      'X-RapidAPI-Host': string;
    };
  }

export const exerciseOptions:ExerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': "3452abec3dmshedbbf150ae7e140p1b1948jsne1d61e96fd4c",
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
    },
  };

export const fetchData = async <T>(url:string, options:ExerciseOptions): Promise<T[]> =>{
    const response = await fetch(url, options);
    const data = await response.json()
    return data;
}