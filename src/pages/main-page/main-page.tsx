import { useActionData, useSubmit } from "react-router-dom";
import { BackgroundImage, ContentLayout, Gallery, IconInput } from "../../components";
import type { SearchImageResponse } from "../../models";

import { useRandomImage } from "../../hooks";
export const MainPage = () => {
    const submit = useSubmit();
    const actionData = useActionData<SearchImageResponse>()
    const { randomImage } = useRandomImage();
    
    const onSearch = (search: string) => {
        if(search) {
            submit({ search }, { method: "post", action: "."})
        }
    }


    return <div>
        {randomImage ? <BackgroundImage backgroundImage={randomImage?.urls.full} style={{ padding: "90px 0"}}><IconInput onChange={onSearch} /></BackgroundImage> : null}
        {actionData ? <ContentLayout><Gallery images={actionData.results}/></ContentLayout> : null }
    </div>
}