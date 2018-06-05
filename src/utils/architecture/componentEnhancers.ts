import { compose, mapPropsStreamWithConfig, withProps } from 'recompose'
import { from, Observable, Subject, fromEvent, of } from 'rxjs'

const mapPropsStream = mapPropsStreamWithConfig({
  fromESObservable: of,
  toESObservable: t => t
})

export const withStateAndIntents = <Props = {}, State = {}, Intents = {}>(
  stream?: (props: Observable<Props>) => Observable<State>,
  intents?: Intents
) =>
  // mapPropsStream(stream as any)
  compose<Props, Props & State & Intents>(
    stream ? mapPropsStream(stream as any) : (i: any) => i,
    intents ? withProps(intents) : (i: any) => i,
  )
