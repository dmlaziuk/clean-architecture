import { BehaviorSubject, Subject } from 'rxjs'
import { tag } from 'rxjs-spy/operator/tag'
import { createStateUpdater } from './createStateUpdater';

export const createState = <T>(name: string, startWith: T) => {
  const cell$ = new BehaviorSubject<T>(startWith)
  const stream$: Subject<T> = tag.call(cell$, `state/${name}`)
  // TODO: find out why type it's not inherited from fn signature if it's even possible  
  const update = createStateUpdater<T, T>((state, payload) => payload, cell$)
  return { cell$, stream$, update }
}