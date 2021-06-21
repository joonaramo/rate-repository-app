import { useQuery } from '@apollo/client';
import { GET_SINGLE_REPOSITORY } from '../graphql/queries';

const useRepository = (id) => {
  const { data } = useQuery(GET_SINGLE_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: { id },
  });
  return {
    repository: data && data.repository,
  };
};

export default useRepository;
