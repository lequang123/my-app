import App, {TestFunc} from './App';

function Child(){
    return (
        <div>
            <App />
            <TestFunc name='test branch 2'/>
        </div>
    )
}

export default Child;