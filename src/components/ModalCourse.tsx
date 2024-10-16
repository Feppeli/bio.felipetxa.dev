
interface ModalCourseProps {
    isOpenCourseModal: boolean;
    onCloseCourseModa: () => void;
    children: React.ReactNode
}

const ModalCourse: React.FC<ModalCourseProps> = ({isOpenCourseModal, children}) => {
    if (!isOpenCourseModal) return null;

    return(
        <div className="h-screen w-screen bg-black fixed top-0 left-0 flex items-center justify-center p-4">
            <div className="w-full p-1 bg-white flex flex-col items-center justify-center p-2">
                <h1 className='text-xl font-bold text-center mt-2'>Ainda estamos realizando as gravações :)</h1>
                {children}
            </div>
        </div>

    )
}

export default ModalCourse;