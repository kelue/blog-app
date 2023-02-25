import React, { useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import * as S from "./dropZoneStyle";
import SubmitButton from '../common/SubmitButton'



const schema = yup.object({
  file: yup.mixed().required('choose a cover image'),
  title: yup.string().required('Type in a blog title'),
  text: yup.string().required('Type blog description')
}).required();


const PostDetails = () => {

  const [selectedFile, setSelectedFile] = useState(null);

  const { register, handleSubmit, setValue, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  
  const onSubmit = data => {
    console.log(data)
    setSelectedFile(null)
  }

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragAccept
  } = useDropzone({
    onDrop: files => {
      setValue("file", files);
    }
  });

  // useEffect(() => {
  //   register('file');
  // });

  useEffect(() => {
    setSelectedFile(acceptedFiles[0]);
  }, [acceptedFiles]);

  return (
      <div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="blogTitle">
            <Form.Label>Blog Title</Form.Label>
            <Form.Control type="text" placeholder="Blog Title" {...register('title')}/>
            <p className='text-danger'>{errors.title?.message}</p>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="blogDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={5} {...register('text')}/>
            <p className='text-danger'>{errors.text?.message}</p>
          </Form.Group>


          {selectedFile && (
          <S.SelectedFileContainer>
            <S.ClearFile
              onClick={() => setSelectedFile(null)}
              title="Remove file"
            />
            <S.SelectedFile>{selectedFile.path}</S.SelectedFile>
          </S.SelectedFileContainer>
        )}

        {!selectedFile && (
          <>
            <S.Dropzone
              isDragAccept={isDragAccept}
              {...getRootProps({ onClick: e => e.preventDefault() })}
            >
              <p>Drag 'n' drop file here, or click to select file</p>
              {/* <Controller
                as={<input />}
                type="file"
                name="file"
                control={control}
                {...getInputProps()}
              /> */}
              <input
                type="file"
                name="file"
                // onChange={e => changeFile(e)}
                {...getInputProps()}
              />
            </S.Dropzone>
            {errors.file && (
                <p className='text-danger'>{errors.file?.message}</p>
            )}
          </>
        )}
        
        <div className='mt-3'>
          <SubmitButton variant={'success'} type={'submit'}/>
        </div>

      </Form>
      </div>
  )
}

export default PostDetails