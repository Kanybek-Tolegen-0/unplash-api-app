import { useActionData, useSubmit } from "react-router-dom";
import { BackgroundImage, IconInput } from "../../components";
import type { SearchImageResponse } from "../../models";
import mainImageUrl from "../../assets/images/main.jpg"

export const MainPage = () => {
    const submit = useSubmit();
    const actionData = useActionData<SearchImageResponse>()
    console.log({ actionData })
    
    const onSearch = (search: string) => {
        if(search) {
            submit({ search }, { method: "post", action: "."})
        }
    }


    return <div>
        <BackgroundImage backgroundImage={mainImageUrl}><IconInput onChange={onSearch} /></BackgroundImage>
    </div>
}