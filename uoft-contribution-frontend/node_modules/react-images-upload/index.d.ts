import { Component } from 'react'

interface Props {
  className?: string
  fileContainerStyle?: object
  onChange?: (files: File[],pictures:string[]) => void
  buttonClassName?: string
  buttonStyles?: object
  withPreview?: boolean
  accept?: string
  name?: string
  withIcon?: boolean
  buttonText?: string
  withLabel?: boolean
  label?: string
  labelStyles?: object
  labelClass?: string
  imgExtension?: string[]
  maxFileSize?: number
  fileSizeError?: string
  fileTypeError?: string
  errorClass?: string
  errorStyle?: object
  singleImage?: boolean
  style?: object
  defaultImage?: string
}
export default class ReactImageUploadComponent extends Component<Props> { }
