import App, {TestFunc} from './App';

function Child(){
    return (
        <div>
            <App />
            <TestFunc name='test 1234 5'/>
        </div>
    )
}

export default Child;