import { RoughAnnotationConfig } from 'rough-notation/lib/model'

interface AnnotateConfig extends RoughAnnotationConfig {
  ref: string
}
export const annotationsConfig: AnnotateConfig[] = [
  {
    ref: 'a1Ref',
    type: 'underline',
    color: '#fff',
    multiline: true,
    iterations: 2,
    padding: 3,
    strokeWidth: 2,
  },

  {
    ref: 'a2Ref',
    type: 'underline',
    color: 'white',
    multiline: true,
    iterations: 2,
    padding: 3,
    strokeWidth: 2,
  },
  {
    ref: 'a3Ref',
    type: 'underline',
    color: 'white',
    multiline: true,
    iterations: 2,
    padding: 3,
    strokeWidth: 2,
  },
  {
    ref: 'a4Ref',
    type: 'underline',
    color: 'white',
    multiline: true,
    iterations: 2,
    padding: 3,
    strokeWidth: 2,
  },
  {
    ref: 'a5Ref',
    type: 'underline',
    color: 'white',
    multiline: true,
    iterations: 2,
    padding: 3,
    strokeWidth: 2,
  },
  {
    ref: 'a6Ref',
    type: 'underline',
    color: '#00adb5',
    strokeWidth: 2,
    padding: 4,
    iterations: 8,
  },
]
