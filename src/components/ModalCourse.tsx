
interface ModalCourseProps {
    isOpenCourseModal: boolean;
    onCloseCourseModal: () => void;
}

const ModalCourse: React.FC<ModalCourseProps> = ({ isOpenCourseModal, onCloseCourseModal }) => {
    if (!isOpenCourseModal) return null;

    return (
        <div className="h-screen w-screen backdrop-blur-sm fixed top-0 left-0 flex items-center p-4 flex justify-center ">
            <div className="w-full bg-white flex flex-col items-center justify-center p-2 rounded md:w-1/2 md:p-10">
                <h1 className='text-xl font-bold text-center mt-2'>Ainda estamos realizando as gravações :)</h1>
                <button onClick={onCloseCourseModal} className='pl-14 pr-14 pt-3 pb-3 mt-4 pb-4 mb-4 rounded text-white bg-red-600 font-bold'>Fechar</button>
            </div>
        </div>

    )
}

export default ModalCourse;