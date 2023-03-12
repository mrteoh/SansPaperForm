import {gql} from '@apollo/client';

export const uploadFileMutation = gql`
  mutation upload($file: Upload!) {
    upload(file: $file)
  }
`;
