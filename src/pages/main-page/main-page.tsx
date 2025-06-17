import { useActionData, useSubmit } from "react-router-dom";
import { BackgroundImage, ContentLayout, Gallery, IconInput } from "../../components";
import type { SearchImageResponse } from "../../models";
import mainImageUrl from "../../assets/images/main.jpg"
export const MainPage = () => {
    const submit = useSubmit();
    const actionData = useActionData<SearchImageResponse>()
    
    const onSearch = (search: string) => {
        if(search) {
            submit({ search }, { method: "post", action: "."})
        }
    }


    return <div>
        <BackgroundImage backgroundImage={mainImageUrl} style={{ padding: "90px 0"}}><IconInput onChange={onSearch} /></BackgroundImage>
        {actionData ? <ContentLayout><Gallery images={actionData.results}/></ContentLayout> : null }
    </div>
}