import { useParams } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux"
import ShowItems from "../ShowItems/ShowItems";

const FolderComponent = () => {
    const { folderId } = useParams();

    const { currentFolderData, childFolders } = useSelector(
        (state) => ({
            currentFolderData: state.filefolders.userFolders.find(
                (folder) => folder.docId === folderId
            )?.data,
            childFolders: state.filefolders.userFolders.filter(
                (folder) => folder.data.parent === folderId
            )
        }),
        shallowEqual
    )

    return (
        <div>
                    {
            childFolders.length > 0 ? (
                <>
                <ShowItems 
                title={"Created Folders"} 
                type={"folder"} 
                items={childFolders} 
                />

                </>
            ) : (
                <p className="text-center my=5">
                Empty Folder
                </p>
            )
        }
        </div>

    )
}

export default FolderComponent;