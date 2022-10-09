import React from 'react';
import { useSelector } from 'react-redux';
const cls = (...classes) => classes.filter(Boolean).join(' ');

const Index = () => {
  const sidebarData = useSelector((state) => state.sidebarData);
  var sidebar = sidebarData.data;

  return (
    <div
      className={cls(
        ' bg-[#f1f3f7]',
        sidebar === true
          ? 'pl-14  transition duration-700 ease-in-out'
          : 'pl-44 md:pl-48 lg:pl-48 xl:pl-48'
      )}
    >
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nam
        illo. Placeat vitae recusandae quibusdam debitis accusantium nisi quis?
        Dolorem odio similique obcaecati magnam illo molestiae ut incidunt,
        minus ipsum.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nam
        illo. Placeat vitae recusandae quibusdam debitis accusantium nisi quis?
        Dolorem odio similique obcaecati magnam illo molestiae ut incidunt,
        minus ipsum.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nam
        illo. Placeat vitae recusandae quibusdam debitis accusantium nisi quis?
        Dolorem odio similique obcaecati magnam illo molestiae ut incidunt,
        minus ipsum.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nam
        illo. Placeat vitae recusandae quibusdam debitis accusantium nisi quis?
        Dolorem odio similique obcaecati magnam illo molestiae ut incidunt,
        minus ipsum.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nam
        illo. Placeat vitae recusandae quibusdam debitis accusantium nisi quis?
        Dolorem odio similique obcaecati magnam illo molestiae ut incidunt,
        minus ipsum.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nam
        illo. Placeat vitae recusandae quibusdam debitis accusantium nisi quis?
        Dolorem odio similique obcaecati magnam illo molestiae ut incidunt,
        minus ipsum.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nam
        illo. Placeat vitae recusandae quibusdam debitis accusantium nisi quis?
        Dolorem odio similique obcaecati magnam illo molestiae ut incidunt,
        minus ipsum.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nam
        illo. Placeat vitae recusandae quibusdam debitis accusantium nisi quis?
        Dolorem odio similique obcaecati magnam illo molestiae ut incidunt,
        minus ipsum.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nam
        illo. Placeat vitae recusandae quibusdam debitis accusantium nisi quis?
        Dolorem odio similique obcaecati magnam illo molestiae ut incidunt,
        minus ipsum.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nam
        illo. Placeat vitae recusandae quibusdam debitis accusantium nisi quis?
        Dolorem odio similique obcaecati magnam illo molestiae ut incidunt,
        minus ipsum.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nam
        illo. Placeat vitae recusandae quibusdam debitis accusantium nisi quis?
        Dolorem odio similique obcaecati magnam illo molestiae ut incidunt,
        minus ipsum.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nam
        illo. Placeat vitae recusandae quibusdam debitis accusantium nisi quis?
        Dolorem odio similique obcaecati magnam illo molestiae ut incidunt,
        minus ipsum.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nam
        illo. Placeat vitae recusandae quibusdam debitis accusantium nisi quis?
        Dolorem odio similique obcaecati magnam illo molestiae ut incidunt,
        minus ipsum.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nam
        illo. Placeat vitae recusandae quibusdam debitis accusantium nisi quis?
        Dolorem odio similique obcaecati magnam illo molestiae ut incidunt,
        minus ipsum.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nam
        illo. Placeat vitae recusandae quibusdam debitis accusantium nisi quis?
        Dolorem odio similique obcaecati magnam illo molestiae ut incidunt,
        minus ipsum.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nam
        illo. Placeat vitae recusandae quibusdam debitis accusantium nisi quis?
        Dolorem odio similique obcaecati magnam illo molestiae ut incidunt,
        minus ipsum.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nam
        illo. Placeat vitae recusandae quibusdam debitis accusantium nisi quis?
        Dolorem odio similique obcaecati magnam illo molestiae ut incidunt,
        minus ipsum.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nam
        illo. Placeat vitae recusandae quibusdam debitis accusantium nisi quis?
        Dolorem odio similique obcaecati magnam illo molestiae ut incidunt,
        minus ipsum.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nam
        illo. Placeat vitae recusandae quibusdam debitis accusantium nisi quis?
        Dolorem odio similique obcaecati magnam illo molestiae ut incidunt,
        minus ipsum.
      </div>
    </div>
  );
};

export default Index;
