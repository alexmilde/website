function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function Gallery(props: any) {
    return (


        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
            {props.images.map((image: any) => (
                <img
                    key={image.id}
                    src={image.imageSrc}
                    alt={image.imageAlt}
                    className={classNames(
                        image.primary ? 'lg:col-span-2 lg:row-span-2' : 'hidden lg:block',
                        'rounded-lg'
                    )}
                />
            ))}
        </div>
    );
}
