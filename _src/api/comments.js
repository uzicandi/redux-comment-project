import axios from 'axios';

// const [data, setData] = useState();
// const [loading, setLoading] = useState(false);
// const [error, setError] = useState(null);

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       setError(null);
//       setData(null);
//       setLoading(true);
//       const response = await axios.get('http://localhost:4000/comments');
//       const data = response.data;
//       setData(response.data);
//       console.log(data);
//     } catch (e) {
//       console.log(e);
//       setError(e);
//     }
//     setLoading(false);
//   };
//   fetchData();
// }, []);
// if (loading) return <div>로딩중..</div>;
// if (error) return <div>에러가 발생했습니다</div>;
// if (!data) return null;

export const getPosts = async () => {
  const response = await axios.get('http://localhost:4000/comments');
  return response.data;
};

export const getPostById = async id => {
  const response = await axios.get(`http://localhost:4000/comments/${id}`);
  return response.data;
};
